import express, { NextFunction } from 'express'
import { Request, Response } from 'express'
import { CreateContactUseCase } from '../../domain/interfaces/use-cases/contact/create-contact'
import { GetAllContactsUseCase } from '../../domain/interfaces/use-cases/contact/get-all-contacts'


export default function ContactsRouter(
    getAllContactsUseCase: GetAllContactsUseCase,
    createContactUseCase: CreateContactUseCase
) {
    const router = express.Router()
    router.get('/', async (res: Response) => {
        try {
            //console.log("Router created")
            const contacts = await getAllContactsUseCase.execute()
            //res.render('id',{})
            res.send(contacts)
        } catch (err) {
            res.status(500).send({ message: "Error fetching data" })
        }
    })

    router.post('/', async (req: Request, res: Response) => {
        try {
            console.log("Router created")
            await createContactUseCase.execute(req.body)
            res.statusCode = 201
            res.json({ message: "Created" })
        } catch (err) {
            res.status(500).send({ message: "Error saving data" })
        }
    })

    return router
}