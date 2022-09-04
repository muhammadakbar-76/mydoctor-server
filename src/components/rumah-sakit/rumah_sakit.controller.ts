import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UpdateRumahSakitDto } from './dtos';
import { CreateRumahSakitDto } from './dtos/create_rumah_sakit.dto';
import { GetRumahSakitDto } from './dtos/get_rumah_sakit.dto';
import RumahSakitService from './rumah_sakit.service';

@Controller({
  version: '1',
  path: 'api/rumah-sakit',
})
export default class RumahSakitController {
  constructor(private readonly rumahSakitServices: RumahSakitService) {}

  @Get()
  async getAll(@Res() res: Response) {
    const rumahSakit = await this.rumahSakitServices.getAll();
    return res.status(HttpStatus.OK).json(rumahSakit);
  }

  @Get(':id')
  async getById(@Param() params: GetRumahSakitDto, @Res() res: Response) {
    const rumahSakit = await this.rumahSakitServices.getById(params.id);
    if (rumahSakit === null)
      return res.status(HttpStatus.NOT_FOUND).json({
        status: HttpStatus.NOT_FOUND,
        message: 'Rumah sakit not found',
      });
    return res.status(HttpStatus.OK).json(rumahSakit);
  }

  @Post()
  async addRumahSakit(
    @Body() createRumahSakitDto: CreateRumahSakitDto,
    @Res() res: Response,
  ) {
    const data = await this.rumahSakitServices.create(createRumahSakitDto);
    return res.status(HttpStatus.CREATED).json(data);
  }

  @Put(':id')
  async updateRumahSakit(
    @Param() param: GetRumahSakitDto,
    @Body() updateRumahSakit: UpdateRumahSakitDto,
    @Res() res: Response,
  ) {
    await this.rumahSakitServices.update(param.id, updateRumahSakit);
    return res.status(HttpStatus.NO_CONTENT).json(null);
  }

  @Delete(':id')
  async deleteRumahSakit(
    @Param() param: GetRumahSakitDto,
    @Res() res: Response,
  ) {
    await this.rumahSakitServices.delete(param.id);
    return res.status(HttpStatus.NO_CONTENT).json(null);
  }
}
