import React from "react";
import { Field, Form, Formik } from "formik";

import {
  DatePicker,
  DATEPICKER_PLACEMENT,
  Modal,
  TextInput,
  withFormik,
} from "@royalnavy/react-component-library";

interface FormData {
  firstName: string;
  lastName: string;
  startDate: Date;
  endDate: Date;
  offset: number;
}

const FormikTextInput = withFormik(TextInput);
const FormikDatePicker = withFormik(DatePicker);

const initialValues: FormData = {
  firstName: "",
  lastName: "",
  startDate: new Date("01/01/2020"),
  endDate: new Date("01/05/2020"),
  offset: 0,
};

const App: React.FC = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onClose = () => {
    console.log("CLOSE");
  };

  return (
    <div className="App">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Modal
            title="Add a new thing"
            primaryButton={{
              children: "Add thing",
              onClick: onClose,
              type: "submit",
            }}
            secondaryButton={{
              children: "Cancel",
              onClick: onClose,
              type: "button",
            }}
            isOpen
          >
            <div className="rn-modal__container">
              <Field
                component={FormikTextInput}
                name="firstName"
                label="First name:"
              />
              <Field
                component={FormikTextInput}
                name="lastName"
                label="Last name:"
              />

              <Field
                component={FormikDatePicker}
                name="range"
                label="Date range"
                startDate={initialValues.startDate}
                endDate={initialValues.endDate}
                placement={DATEPICKER_PLACEMENT.BELOW}
              />
            </div>
          </Modal>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
