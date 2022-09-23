import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) {}

    @Get()
    getAll(){
        return this.service.getUsers()
    }

    @Get(':id')
    getUser(@Param() params) {
        return this.service.getUser(params.id)
    }

    @Post('new')
    saveUser(@Body() user: Users){
        return this.service.newUser(user)
    }

    @Put()
    updateUser(@Body() user: Users){
        return this.service.updateUser(user)
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id)
    }
}
