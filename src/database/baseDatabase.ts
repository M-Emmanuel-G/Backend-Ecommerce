import knex from 'knex';
import dotenv from 'dotenv';
import { PrismaClient } from "@prisma/client";

dotenv.config()

export abstract class BaseDatabase{
    protected static connection = new PrismaClient()
}


// const prismaClient = new PrismaClient()

// export default prismaClient
