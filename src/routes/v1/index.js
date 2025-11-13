/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRouter } from './boardRoute'
import { columnRouter } from './columnRoute'
import { cardRouter } from './cardRoute'

const Router = express.Router()

/* Check APIs v1/status*/
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'APIs V1 ready to use' })
})

/* Board APIs*/
Router.use('/boards', boardRouter)

/* Columns APIs*/
Router.use('/columns', columnRouter)

/* Cards APIs*/
Router.use('/cards', cardRouter)

export const APIs_V1 = Router