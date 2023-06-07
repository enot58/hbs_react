import { CreateObjectBuildsDto } from "../../../dto";
import ApiError from "../../../lib";
import { ObjectsBuilds } from "../../../models";

interface IObjectBuildsService {
    createObjectBuilds(
        dto: CreateObjectBuildsDto,
        img
    ): Promise<ObjectsBuilds | ApiError>;
    getAllObjectBuilds(): Promise<ObjectsBuilds[] | ApiError>;
    getObjectBuildsById(id: number): Promise<ObjectsBuilds | ApiError>;
    updateObjectBuilds(
        id: number,
        dto: CreateObjectBuildsDto,
        img: any
    ): Promise<ObjectsBuilds | ApiError>;
    deleteObjectBuilds(id: number): Promise<ObjectsBuilds | ApiError>;
}

export default IObjectBuildsService;
