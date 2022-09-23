import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>){}

    async newUser(user: Users){
        this.usersRepository.insert(user)
    }

    async getUsers(): Promise<Users[]> {
        return this.usersRepository.find()
    }

    async getUser(__id: number): Promise<Users[]> {
        return this.usersRepository.find({
            select: ['id', 'name', 'pass', 'rol', 'user'],
            where: [{ id: __id }]
        })
    }

    async updateUser(user: Users) {
        this.usersRepository.save(user)
    }

    async deleteUser(user: Users) {
        this.usersRepository.delete(user)
    }
}
