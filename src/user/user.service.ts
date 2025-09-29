import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async editUser(userId: number, editUserDto: EditUserDto) {
    const user = await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        ...editUserDto,
      },
    });

    delete (user as any).hash;

    return user;
  }
}
