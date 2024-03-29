import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $authHost } from "../../http/index.js";

const initialState = {
    mainTable: [],
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
    lastMeters: {},
    limit: 6,
    isLoading: false,
};

export const createTestElectricalMeter = createAsyncThunk(
    "api/createTestElectricalMeter",
    async ({ dataMeter }, { rejectedWithValue, dispatch }) => {
        const { data } = await $authHost.post("api/testElectrical", dataMeter);
        dispatch(setLastMeters(dataMeter));
    }
);

export const getAllElectricalMeters = createAsyncThunk(
    "api/getAllElectricalMeters",
    async ({ formQuery }, { getState, dispatch }) => {
        const { userId, objectBuildId, currentPage } = formQuery;

        const state = getState();
        const { limit } = state.mainTable;

        const { data } = await $authHost.get(
            `api/testElectrical?userId=${userId}&objectBuildId=${objectBuildId}&page=${currentPage}&limit=${limit}`
        );

        const { rows, count } = data.meters;

        dispatch(setTotalCount(count));
        dispatch(setMeters({ rows }));
    }
);

export const getAllMeterWithoutParameters = createAsyncThunk(
    "api/getAllMeterWithoutParameters",
    async ({ formQuery }, { getState, dispatch }) => {
        const { userId, objectBuildId } = formQuery;
        console.log(userId, objectBuildId);
        const state = getState();
        const { limit } = state.mainTable;

        const { data } = await $authHost.get(
            `api/testElectrical?userId=${userId}&objectBuildId=${objectBuildId}&page=${1}&limit=${limit}`
        );
        const { rows, count } = data.meters;
        console.log(rows, count);
        dispatch(setTotalCount(count));
        dispatch(setMeters({ rows }));
    }
);

export const getOneElectricalMeter = createAsyncThunk(
    "api/getOneElectricalMeter/:id",
    async ({ formData }, { getState, dispatch }) => {
        const id = formData.get("id");

        const { data } = await $authHost.post(
            `api/testElectrical/${id}`,
            formData
        );
    }
);

// Поиск по номеру квартиры
export const getMetersByNumberFlat = createAsyncThunk(
    "api/testAddWater/getMetersByNumberFlat",
    async ({ formQuery }, { getState, dispatch }) => {
        const state = getState();

        const { limit, currentPage } = state.mainTable;
        const { userId, objectBuildId, num } = formQuery;
        const { data } = await $authHost.get(
            `api/testElectrical/search/?userId=${userId}&objectId=${objectBuildId}&limit=${limit}&page=${currentPage}&numberFlat=${num}`
        );

        const { rows, count } = data.listFlats;

        dispatch(setTotalCount(count));
        dispatch(setMeters({ rows }));
    }
);

// export const getAllExcelMeters = createAsyncThunk(
//     "api/getAllExcelMeters",
//     async ({ formQuery }, { dispatch }) => {
//         const { objectBuildId } = formQuery;
//     }
// );

export const testElectricalMeterSlice = createSlice({
    name: "testElectricalMeterSlice",
    initialState,
    reducers: {
        setLastMeters: (state, action) => {
            state.lastMeters = action.payload;
        },
        addMeters: (state, action) => {},
        setTotalCount: (state, action) => {
            state.totalCount = action.payload;
        },
        getTotalCount: (state, action) => {
            return state.totalCount;
        },
        setMeters: (state, action) => {
            state.mainTable = action.payload.rows;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const {
    setLastMeters,
    addMeters,
    setTotalCount,
    getTotalCount,
    setCurrentPage,
    setMeters,
} = testElectricalMeterSlice.actions;
export default testElectricalMeterSlice.reducer;
