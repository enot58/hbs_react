import { CreateObjectBuildsDto } from "../../dto";
import { IObjectBuildsService } from "../../interfaces";
import ApiError from "../../lib";
import { ObjectsBuilds } from "../../models";

export class ObjectsBuildsService implements IObjectBuildsService {
    // Сошздаём объекты
    async createObjectBuilds(
        dto: CreateObjectBuildsDto
    ): Promise<ObjectsBuilds | ApiError> {
        try {
            const object = await ObjectsBuilds.create(dto);
            if (!object) {
                return ApiError.badRequest("Не удаётся создать объект");
            }
            return object;
        } catch (e) {
            console.log(e);
        }
    }

    // Получим все объекты
    async getAllObjectBuilds(): Promise<ObjectsBuilds[] | ApiError> {
        try {
            const objects = await ObjectsBuilds.findAll();
            if (!objects) {
                return ApiError.badRequest("Не удаётся получить все объекты");
            }

            return objects;
        } catch (e) {
            console.log(e);
        }
    }

    // Получить один объект
    async getObjectBuildsById(id: number): Promise<ObjectsBuilds | ApiError> {
        try {
            const object = await ObjectsBuilds.findByPk(id);
            if (!object) {
                return ApiError.badRequest("Не удаётся получить объект");
            }
            return object;
        } catch (e) {
            console.log(e);
        }
    }

    // Обновить
    async updateObjectBuilds(
        id: number,
        dto: CreateObjectBuildsDto
    ): Promise<ObjectsBuilds | ApiError> {
        try {
            const object = await ObjectsBuilds.findByPk(id);
            if (!object) {
                return ApiError.badRequest("Не удаётся обновить объект");
            }
            await object.update(dto);
            return object;
        } catch (e) {
            console.log(e);
        }
    }

    // Удалить
    async deleteObjectBuilds(id: number): Promise<ObjectsBuilds | ApiError> {
        try {
            const object = await ObjectsBuilds.findByPk(id);
            if (!object) {
                return ApiError.badRequest("Не удаётся удалить объект");
            }
            await object.destroy();
            return object;
        } catch (e) {
            console.log(e);
        }
    }
}