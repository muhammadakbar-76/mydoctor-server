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

@Controller('api/v1/rumah-sakit')
export default class RumahSakitController {
  constructor(private readonly rumahSakitServices: RumahSakitService) {}

  @Get()
  async getAll(@Res() res: Response) {
    try {
      const rumahSakit = await this.rumahSakitServices.getAll();
      return res.status(HttpStatus.OK).json(rumahSakit);
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async getById(@Param() params: GetRumahSakitDto, @Res() res: Response) {
    try {
      const rumahSakit = await this.rumahSakitServices.getById(params.id);
      if (rumahSakit === null)
        return res.status(HttpStatus.NOT_FOUND).json({
          status: HttpStatus.NOT_FOUND,
          message: 'Rumah sakit not found',
        });
      return res.status(HttpStatus.OK).json(rumahSakit);
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async addRumahSakit(
    @Body() createRumahSakitDto: CreateRumahSakitDto,
    @Res() res: Response,
  ) {
    try {
      const data = await this.rumahSakitServices.create(createRumahSakitDto);
      return res.status(HttpStatus.CREATED).json(data);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  async updateRumahSakit(
    @Param() param: GetRumahSakitDto,
    @Body() updateRumahSakit: UpdateRumahSakitDto,
    @Res() res: Response,
  ) {
    try {
      await this.rumahSakitServices.update(param.id, updateRumahSakit);
      return res.status(HttpStatus.NO_CONTENT).json(null);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async deleteRumahSakit(
    @Param() param: GetRumahSakitDto,
    @Res() res: Response,
  ) {
    try {
      await this.rumahSakitServices.delete(param.id);
      return res.status(HttpStatus.NO_CONTENT).json(null);
    } catch (error) {
      throw error;
    }
  }
}
