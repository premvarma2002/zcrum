import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db;

// globalThis.prisma: This global variable ensures that during development, we don't create multiple instances of PrismaClient, which can lead to issues with database connections. In production, a new instance is created as needed.potentially leading to connection losses.