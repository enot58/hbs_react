import Dexie from "dexie";

export const db = new Dexie("waterDatabase");
db.version(1).stores({
    main: "++id,idMain,section, floor, flat, office, line, typeMeter, numberMeter, sumMeter, comment",
});

export default db;
