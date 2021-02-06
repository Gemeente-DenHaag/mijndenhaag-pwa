import TextField from "@gemeente-denhaag/nlds-react-components/input/textfield/TextField";
import Button from "@gemeente-denhaag/nlds-react-components/input/button/Button";
import React, {useState} from "react";
import Grid from "@gemeente-denhaag/nlds-react-components/layout/grid/Grid";
import {Typography} from "@gemeente-denhaag/nlds-react-components/datadisplay/typography/Typography";
import {Container} from "@gemeente-denhaag/nlds-react-components/layout/Container/Container";

const LoginSection: React.FC = () => {

    const [bsn, setBsn] = useState('680426280');
    const [kvk, setKvk] = useState('80939155');

    const submitBsn = () => {
        //TODO: Submit BSN to API gateway to receive a JWT
    };

    const submitKvk = () => {
        //TODO: Submit Kvk to API gateway to receive a JWT
    };

    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Typography variant={"h4"}>Inloggen met DigiD</Typography>
                    <form>
                        <TextField label={"BSN"} value={bsn} onChange={(event) => setBsn(event.target.value)}/>
                        <Button variant={"contained"} color={"primary"} onClick={submitBsn}>Log in</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant={"h4"}>Inloggen met e-Herkenning</Typography>
                    <form>
                        <TextField label={"KVK"} value={kvk} onChange={(event) => setKvk(event.target.value)}/>
                        <Button variant={"contained"} color={"primary"} onClick={submitKvk}>Log in</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LoginSection