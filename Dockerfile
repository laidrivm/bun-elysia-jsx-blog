FROM oven/bun:latest AS base
WORKDIR /usr/src/app

RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

FROM base AS install
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

FROM base AS build
COPY --from=install /usr/src/app/node_modules node_modules
COPY . .
RUN bun run build

FROM base AS release
COPY --from=build /usr/src/app/out/index.js out/index.js
COPY --from=build /usr/src/app/out/generate.js out/generate.js
COPY --from=build /usr/src/app/package.json .
COPY --from=build /usr/src/app/public public
COPY --from=build /usr/src/app/articles articles

RUN chown -R appuser:appgroup /usr/src/app

USER appuser

EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "prod" ]
