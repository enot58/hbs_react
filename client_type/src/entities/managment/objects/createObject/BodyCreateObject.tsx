import React, { ChangeEvent } from "react";
import { Col, Row } from "react-bootstrap";
import { useAppDispatch } from "../../../../app/store";
import { useAppSelector } from "../../../../shared/hooks";
import { InputString } from "../../../../shared/ui";
import { setName, setDescription } from "../../../../shared/models";
// interface BodyCreateObjectProps {
//     handleChangeName: (e) => void;
//     handleChangeAddress: (e) => void;
// }

const BodyCreateObject: React.FC = () => {
    const { name, description } = useAppSelector((store) => store.createObject);
    const dispatch = useAppDispatch();
    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(e.target.value));
    };

    const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDescription(e.target.value));
    };
    return (
        <Row>
            <Row>
                <Col>
                    <InputString
                        disabled={false}
                        type="text"
                        title="Наименование"
                        onChange={handleChangeName}
                        value={name}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputString
                        disabled={false}
                        type="text"
                        title="Адрес"
                        onChange={handleChangeAddress}
                        value={description}
                    />
                </Col>
            </Row>
        </Row>
    );
};

export default BodyCreateObject;
