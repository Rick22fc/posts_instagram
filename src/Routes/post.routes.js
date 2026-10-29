import {Router} from 'express'
import {instagramController} from '../controller/post.controller.js'


export const instagramRoutes = Router()

instagramRoutes.getALL("", instagramController.getALL());
instagramRoutes.getByID("", instagramController.getByID());
instagramRoutes.create("", instagramController.create());
instagramRoutes.delete("/:id", instagramController.delete());
instagramRoutes.put("/:id", instagramController.put());




