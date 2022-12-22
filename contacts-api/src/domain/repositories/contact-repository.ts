import { Contact } from "../../domain/entities/contact";
import { ContactDataSource } from "../interfaces/data-sources/ContactDataSource";
import { ContactRepository } from "../interfaces/repositories/contact-repository";

export interface ContactDataSource {
    create(contact: Contact): Promise<boolean>;
    getAll(): Promise<Contact[]>;
}

export class ContactRepositoryImpl implements ContactRepository {
    contactDataSource: ContactDataSource
    constructor(contactDataSource: ContactDataSource) {
        this.contactDataSource = contactDataSource
    }

    async createContact(contact: Contact): Promise<boolean> {
        const result = await this.contactDataSource.create(contact)
        return result;
    }
    async getContacts(): Promise<Contact[]> {
        const result = await this.contactDataSource.getAll()
        return result;
    }
}