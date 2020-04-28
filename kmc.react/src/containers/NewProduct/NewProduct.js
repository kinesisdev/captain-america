import React, { useRef, useState, useFormFields} from "react";
import { API } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import { onError } from "../../libs/errorLib";
import { s3Upload } from "../../libs/awsLib";
import config from "../../config";
import "./NewProduct.css";

export default function NewNote() {
    const file = useRef(null);
    const history = useHistory();
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [fields, handleFieldChange] = useFormFields({
        type: "",
        password: ""
    });

    function validateForm() {
        return content.length > 0;
    }

    function handleFileChange(event) {
        file.current = event.target.files[0];
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
                    1000000} MB.`
            );
            return;
        }

        setIsLoading(true);

        try {
            const attachment = file.current ? await s3Upload(file.current) : null;

            await createNote({
                content,
                attachment
            });
            history.push("/");
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    }

    function createNote(note) {
        return API.post("kmc", "/products", {
            body: note
        });
    }

    return (
        <div className="NewProduct">
        <form onSubmit={handleSubmit}>
        <FormGroup controlId="content">
        <FormControl
        value={content}
        componentClass="textarea"
        onChange={e => setContent(e.target.value)}
        />
        </FormGroup>
        <FormGroup controlId="file">
        <ControlLabel>Attachment</ControlLabel>
        <FormControl onChange={handleFileChange} type="file" />
        </FormGroup>
        <LoaderButton
        block
        type="submit"
        bsSize="large"
        bsStyle="primary"
        isLoading={isLoading}
        disabled={!validateForm()}
        >
        Create
        </LoaderButton>
        </form>
        </div>
    );
}