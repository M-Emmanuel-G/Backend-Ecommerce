import { db } from '../prisma';

export abstract class BaseDatabase{
    protected static connection = db
}

