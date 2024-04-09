import dotenv from 'dotenv';
import { PrismaClient } from "@prisma/client";
import { db } from '../prisma';

dotenv.config()

export abstract class BaseDatabase{
    protected static connection = db
}

