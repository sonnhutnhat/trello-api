/* eslint-disable no-useless-catch */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'

const createNew = async (reqBody) => {
  try {
    // Xử lý logic dữ liệu tùy đặc thù
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    // Gọi tới tầng Model để xử lý lưu bản ghi newBoard vào trong DB
    const createdBoard = await boardModel.createNew(newBoard)
    // console.log(createdBoard)

    // Lấy bản ghi board sau khi gọi (tùy mục đích dự án àm có cần bước này hay không)
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    // console.log(getNewBoard)
    // Làm thêm các xử lý logic khác với Collection khác tùy đặc thù dự án ...
    //Bắn email, notification về cho admin khi có 1 cái board mới được tạo ...


    // Trả kết quả về, trong Service luôn phải return
    return getNewBoard
  } catch (error) {
    throw error
  }
}

export const boardService = { createNew }