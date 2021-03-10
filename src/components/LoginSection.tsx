import Grid from '@gemeente-denhaag/grid/Grid'
import TextField from '@gemeente-denhaag/textfield/TextField'
import Container from '@gemeente-denhaag/container/Container'
import {Typography} from "@gemeente-denhaag/datadisplay";
import {Button} from "@gemeente-denhaag/input";

import {navigate} from "gatsby";
import React, {FormEvent} from "react";

const LoginSection: React.FC = () => {

    const submitBsn = (formSubmitEvent: FormEvent) => {
        formSubmitEvent.preventDefault();

        const bsn = formSubmitEvent.target['bsn'].value;
        //BSN should be sent to Gateway to receive JWT for mock login.

        navigate("/index");
    };

    const submitKvk = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();

        const kvk = formSubmitEvent.target['kvk'].value;
        //KVK should be sent to Gateway to receive JWT for mock login.

        navigate("/index");
    };

    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Typography variant={"h4"}>Inloggen met DigiD</Typography>
                    <form onSubmit={submitBsn}>
                        <TextField label={"BSN"} name={"bsn"}/>
                        <Button variant={"contained"} color={"primary"} type={"submit"}>Log in</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant={"h4"}>Inloggen met e-Herkenning</Typography>
                    <form onSubmit={submitKvk}>
                        <TextField label={"KVK nummer"} name={"bsn"}/>
                        <Button variant={"contained"} color={"primary"} type={"submit"}>Log in</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LoginSection
