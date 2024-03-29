import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { VscJson } from "react-icons/vsc";
import { getDat } from "../../../../../http/waterMeterApi";

const GenerateDat = ({
    stateButton,
    objectBuildId,
    selectedSection,
    selectedKdl,
    stateTextMain,
    addText,
}) => {
    // Состояние текстового поля
    const [stateText, setStateText] = React.useState("");

    // Функция из главной страницы для изменения данных
    const handleChangeText = (e) => {
        addText(e);
        setStateText(e.target.value);
    };

    // Функция формирует текст
    const configDatText = (channels, time) => {
        let timeString = `{"Time":"${time}","Показания":[`;
        let stringChannelsSum = channels
            .map((ch) => `{"${ch.channel}":${ch.sum}}`)
            .join(",");
        let mainString = `${timeString}${stringChannelsSum}]}`;
        setStateText(mainString);
        addText(mainString);
    };

    const handleGetDat = async () => {
        const { time, channels } = await getDat(
            objectBuildId,
            selectedSection,
            selectedKdl
        );
        configDatText(channels, time);
    };

    return (
        <>
            <Col sm={3}>
                <Button
                    variant="secondary"
                    disabled={stateButton}
                    onClick={handleGetDat}
                >
                    Получить <VscJson color="black" /> .dat
                </Button>
            </Col>
            <Row className="mt-3">
                <Col sm={12}>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>.dat</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                value={
                                    stateText === ""
                                        ? "Пока нет данных"
                                        : stateText
                                }
                                disabled={true}
                                onChange={(e) => {
                                    handleChangeText(e);
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default GenerateDat;
