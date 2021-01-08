import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Slide,
  IconButton,
  Grid
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { blue } from '@material-ui/core/colors';
import SystemDetailsSection from './system-details-section';
import ModelDetailsSection from './model-details-section';
import useStyles from '../../../../../utils/styles';
import NewDataSection from './new-data-section';
import { processScripts } from '../../../../../API';

interface IModifyDialogProps {
  isOpen: boolean;
  onClose(): void;
}

interface IUploadedItem {
  name: string;
  size: number;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<Function>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const ModifyDialog: React.FC<IModifyDialogProps> = (props) => {
  const [system, setSystem] = useState<number>(-1);
  const [expanded, setExpanded] = useState<string>('panel1');
  const [uploadedItems, setUploadedItems] = useState<IUploadedItem[]>([]);
  const classes: Record<string, string> = useStyles();

  const handleChangeUploadedItems = (name: string, size: number) => {
    setUploadedItems((prevState) => [...prevState, { name, size }]);
  };

  const handleClick = () => {
    processScripts({ files: uploadedItems });
    props.onClose();
  };

  return (
    <Dialog
      open={props.isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => props.onClose()}
      aria-labelledby="modify-slide-title"
      aria-describedby="modify-slide-description"
      classes={{ paper: classes.dialogModify }}
    >
      <DialogTitle
        disableTypography
        style={{ backgroundColor: blue[700], color: '#fff', fontSize: 20 }}
      >
        {`Add or Modify Data`}
        <IconButton
          onClick={() => props.onClose()}
          style={{ position: 'absolute', right: 10, padding: 0 }}
        >
          <HighlightOffIcon style={{ color: '#fff' }} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item md={12}>
            <Grid container justify="center" alignItems="center">
              <Grid item md={12}>
                <SystemDetailsSection
                  expanded={expanded}
                  system={system}
                  onChange={(value: string) => setExpanded(value)}
                  onChangeSystem={(value: number) => setSystem(value)}
                />
              </Grid>
              <Grid item md={12}>
                <ModelDetailsSection
                  system={system}
                  expanded={expanded}
                  onChange={(value: string) => setExpanded(value)}
                />
              </Grid>
              <Grid item md={12}>
                <NewDataSection
                  expanded={expanded}
                  uploadedItems={uploadedItems}
                  onChangeUploadedItems={(name: string, size: number) =>
                    handleChangeUploadedItems(name, size)
                  }
                  onChange={(value: string) => setExpanded(value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <div
              style={{
                width: '100%',
                minHeight: '20vh',
                backgroundColor: '#000'
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose()} color="primary">
          {`Cancel`}
        </Button>
        <Button onClick={handleClick} color="primary">
          {`Process`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModifyDialog;
