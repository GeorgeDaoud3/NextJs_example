# Stage 1: Base image with dependencies
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Stage 2: Install dependencies
FROM base AS deps
COPY ./hello-world-next/package.json ./hello-world-next/yarn.lock* ./hello-world-next/package-lock.json* ./hello-world-next/pnpm-lock.yaml* ./
RUN npm ci # Or use yarn/pnpm/bun equivalents

# Stage 3: Build the application
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY ./hello-world-next .
RUN npm run build # Or yarn/pnpm/bun equivalents

# Stage 4: Production runner
FROM base AS runner
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
# Copy standalone output and static files
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
