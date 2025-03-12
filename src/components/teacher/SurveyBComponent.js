import { Alert, Button, Card, Flex, Form, Radio, Steps, Typography } from "antd";
import { useState }                                                  from "react";
import { useTranslation }                                            from "react-i18next";
import { useNavigate, useParams }                                    from "react-router-dom";

const { Step } = Steps;

const SurveyB = () => {

	let { studentId, classroomName } = useParams();
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [currentStep, setCurrentStep] = useState(0);
	const [form] = Form.useForm();
	const [message, setMessage] = useState(null);

	const responseOptions = [
		{ label: t("surveyB.options.never"), value: 0 },
		{ label: t("surveyB.options.almostNever"), value: 1 },
		{ label: t("surveyB.options.fewTimes"), value: 2 },
		{ label: t("surveyB.options.sometimes"), value: 3 },
		{ label: t("surveyB.options.often"), value: 4 },
		{ label: t("surveyB.options.unknown"), value: -1 }
	];

	const steps = [
		{
			title:   t("surveyB.steps.reading"),
			content: (
				         <>
					         <Form.Item name="reading.1" label="Su competencia en la lectura es peor que la de los alumnos de su misma edad">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="reading.2" label="Tiene dificultad para reconocer palabras muy frecuentes o familiares">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="reading.3" label="Cuando lee en voz alta, se equivoca de palabras">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="reading.4" label="Su actitud a la hora de leer es peor que la de los alumnos de su misma edad">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="reading.5" label="Cuando revisa sus producciones, no encuentra los errores">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
				         </>
			         )
		}, {
			title:   t("surveyB.steps.orthography"),
			content: (
				         <>
					         <Form.Item name="orthography.1" label="Se equivoca en la tarea de escribir al dictado, cometiendo errores en las letras, palabras o lo deja en blanco">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="orthography.2"
					                    label="Comete muchos errores a la hora de escribir, tales como saltarse letras, no mantiene el mismo tamano de las letras o no respeta la pauta">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="orthography.3" label="Necesita mas tiempo que otros alumnos para copiar un texto">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
				         </>
			         )
		}, {
			title:   t("surveyB.steps.writeExpression"),
			content: (
				         <>
					         <Form.Item name="writeExpression.1" label="Muchas palabras de su vocabulario oral, no las sabe escribir">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="writeExpression.2" label="La expresion escrita es peor que la oral">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
				         </>
			         )
		}, {
			title:   t("surveyB.steps.generalBehavior"),
			content: (
				         <>
					         <Form.Item name="generalBehavior.1" label="En la libreta, deja muchas marcas de goma de borrar, incluso se rompe o se arruga la hoja de tanto borar">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="generalBehavior.2" label="Su comportamiento para la tarea de casa es irregular">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="generalBehavior.3" label="El comportamiento en la clase es bueno, pero su rendimiento es bajo">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="generalBehavior.4" label="Los padres dicen que el alumno estudia mucho, pero, incluso así, su rendimiento en clase es bajo">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="generalBehavior.5"
					                    label="Los padres dicen que el alumno ha leído muchas veces el contenido que debe escribir de memoria, pero el resultado de la escritura de memoria no es bueno">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
				         </>
			         )
		}, {
			title:   t("surveyB.steps.mathAbility"),
			content: (
				         <>
					         <Form.Item name="mathAbility.1" label="Para cálculos sencillos (por ejemplo, 3+2), necesita los dedos o hacer marcas en el papel">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="mathAbility.2" label="Tiene dificultades para resolver problemas">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="mathAbility.3" label="Tiene dificultades para comprender el valor de los numeros que ha de conocer por su edad">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
				         </>
			         )
		}, {
			title:   t("surveyB.steps.speechAbility"),
			content: (
				         <>
					         <Form.Item name="speechAbility.1" label="Reacciona lentamente cuando tiene que contestar preguntas de forma oral">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="speechAbility.2" label="Se expresa oralmente con dificultad (por ejemplo, no encuentra las palabras para expresar sus ideas)">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="speechAbility.3" label="Comete errores gramaticales cuando habla">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="speechAbility.4" label="Tiene dificultades para pronunciar bien">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
				         </>
			         )
		}, {
			title:   t("surveyB.steps.memoryAbility"),
			content: (
				         <>
					         <Form.Item name="memoryAbility.1"
					                    label="Pierde sus pertenencias personales, tales como libretas, lápices, o estuches, o se olvida de hacer o traer los deberes">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="memoryAbility.2" label="Le cuesta seguir una serie de varias indicaciones seguidas">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="memoryAbility.3"
					                    label="Necesita que otras personas le recuerden varias veces ciertas informaciones, como las fechas de los exámenes">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="memoryAbility.4" label="Le cuesta aprender de memoria los nombres de personas o lugares">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="memoryAbility.5" label="Le cuesta aprender canciones o poemas infantiles, incluso los que son sencillos">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="memoryAbility.6" label="Tiene dificultad para aprender un horario que sea un poco complejo">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="memoryAbility.7"
					                    label="Tiene dificultad para recordar sus datos personales, tales como su fecha de nacimiento, su número de teléfono, su dirección, etc.">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
				         </>
			         )
		}, {
			title:   t("surveyB.steps.attentionAbility"),
			content: (
				         <>
					         <Form.Item name="attentionAbility.1" label="Se distrae con facilidad">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="attentionAbility.2"
					                    label="Tiene dificultad para concentrarse en una cosa durante mucho tiempo (por ejemplo, cuando hace tareas, se para con frecuencia, se levanta a hablar con otras personas)">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="attentionAbility.3"
					                    label="Tiene dificultad para repetir datos que acaba de escuchar, como números de teléfono, nombres de personas o contenido de cuentos">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
				         </>
			         )
		}, {
			title:   t("surveyB.steps.sequenceAbility"),
			content: (
				         <>
					         <Form.Item name="sequenceAbility.1" label="Cambia el orden de las letras en las palabras">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="sequenceAbility.2" label="Le cuesta escribir bien las fechas, siguiendo el orden de día, mes, año">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="sequenceAbility.3" label="Tiene dificultad para asimilar los conceptos de tiempo (no distingue ayer, hoy y mañana)">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="sequenceAbility.4"
					                    label="Se equivoca de orden cuando tiene que aprender de memoria algunas palabras o números en una secuencia (por ejemplo, el orden de las cuatro estaciones o nmeros de teléfono)">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="sequenceAbility.5" label="Necesita mucho tiempo para aprender a decir la hora">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
				         </>
			         )
		}, {
			title:   t("surveyB.steps.muscleCoordination"),
			content: (
				         <>
					         <Form.Item name="muscleCoordination.1" label="Cuando colorea un dibujo se sale de los límites">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="muscleCoordination.2" label="Tiene dificultad cuando corre y salta (por ejemplo, se cae a menudo o se lesiona)">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="muscleCoordination.3" label="Cuando hace juegos con mucho movimiento, por ejemplo, saltar la cuerda, se cansa con facilidad">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="muscleCoordination.4"
					                    label="Su rendimiento en Eduación Física es bajo (por ejemplo, no puede cumplir los movimientos que le indica el profesorado)">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="muscleCoordination.5" label="Le cuesta saltar la cuerda, tirar, coger o dar patadas a la pelota">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="muscleCoordination.6" label="En la clase de Música tiene dificultad para dar palmadas siguiendo ritmos sencillos">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="muscleCoordination.7" label="Le cuesta atarse los cordones y abrocharse los botones mas que a los ninos de su edad">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
				         </>
			         )
		}, {
			title:   t("surveyB.steps.spatialOrientation"),
			content: (
				         <>
					         <Form.Item name="spatialOrientation.1" label="Le cuesta distinguir entre arriba y abajo o entre izquierda y derecha">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="spatialOrientation.2"
					                    label="Tiene dificultad para orientarse (por ejemplo, necesita mucho tiempo para saber como ir a las diferentes aulas, salas del profesorado o sala de música)">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
				         </>
			         )
		}, {
			title:   t("surveyB.steps.emotionsSocialAdaptation"),
			content: (
				         <>
					         <Form.Item name="emotionsSocialAdaptation.1"
					                    label="Huye del estudio">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="emotionsSocialAdaptation.2"
					                    label="Le cuesta relacionarse con otras personas (por ejemplo, a menudo discute con los hermanos o con los companeros)">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="emotionsSocialAdaptation.3" label="Tiene mala imagen de sí mismo">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="emotionsSocialAdaptation.4" label="Se desanima o desiste de hacer las cosas con facilidad">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
					         <Form.Item name="emotionsSocialAdaptation.5"
					                    label="Tiene dolor de cabeza, dolor de estómago, se enfada o se pone nervioso cuando se siente presionado">
						         <Radio.Group>
							         { responseOptions.map((option) => (
								         <Radio.Button key={ option.value } value={ option.value }>{ option.label }</Radio.Button>
							         )) }
						         </Radio.Group>
					         </Form.Item>
				         </>
			         )
		}
	];

	const onNext = () => {
		form
			.validateFields()
			.then(() => {
				setMessage(null);
				setCurrentStep(currentStep + 1);
			})
			.catch(() => setMessage({ error: { type: "validationError" } }));
	};

	const onPrev = () => {
		setCurrentStep(currentStep - 1);
	};

	const onFinish = async () => {
		const allValues = form.getFieldsValue(true);
		let total = Object.values(allValues).reduce((acc, val) => {
			if ( Number.isInteger(val) && val > 0 ) {
				return acc + val;
			}
			return acc + 0;
		}, 0);

		let response = null;
		try {
			response = await fetch(process.env.REACT_APP_USERS_SERVICE_URL + "/surveys/B", {
				method:  "POST", headers: {
					"Content-Type": "application/json", Authorization: `Bearer ${ localStorage.getItem("accessToken") }`
				}, body: JSON.stringify({
					                        studentId, score: total
				                        })
			});
		}
		catch ( e ) {
			setMessage({ error: { type: "internalServerError", message: e.message } });
			return;
		}

		if ( response?.ok ) {
			navigate("/teachers/classrooms/" + classroomName);
		} else {
			let jsonData = await response?.json();
			setMessage({ error: jsonData?.error || { type: "unknownError", message: "Error desconocido" } });
		}
	};

	const { Title } = Typography;

	return (
		<Card title={ <Title level={ 3 } style={ { whiteSpace: "normal", wordBreak: "break-word" } }>{ t("surveyB.title") }</Title> } style={ { maxWidth: "85vw" } }>
			{ message?.error?.type && (
				<Alert type="error" message={ t(message?.error?.type) } showIcon style={ { marginBottom: "1vh" } }/>
			) }
			<Steps current={ currentStep } size="small" labelPlacement="vertical" onChange={ (value) => setCurrentStep(value) }>
				{ steps.map((item) => (
					<Step key={ item.title } title={ item.title }/>
				)) }
			</Steps>
			<Flex justify="space-around">
				<Form labelWrap form={ form } name="surveyB" layout="vertical" onFinish={ onFinish } initialValues={ { remember: true } } style={ { marginTop: "2rem" } }>
					{ steps[ currentStep ].content }
					<Flex justify="space-between" gap={ 30 }>
						{ currentStep > 0 && <Button block onClick={ onPrev }>{ t("surveyB.button.prev") }</Button> }
						{ currentStep < steps.length - 1 && <Button block type="primary" onClick={ onNext }>{ t("surveyB.button.next") }</Button> }
						{ currentStep === steps.length - 1 && <Button block type="primary" htmlType="submit">{ t("surveyB.button.submit") }</Button> }
					</Flex>
				</Form>
			</Flex>
		</Card>
	);
};

export default SurveyB;