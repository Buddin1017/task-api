import prisma from '../config/db.js';

export async function findAll(completed) {
  const where = {};

  if (completed !== undefined) {
    where.completed = completed === true || completed === 'true';
  }

  return prisma.task.findMany({ where });
}

export async function create(data) {
  return prisma.task.create({
    data,
  });
}