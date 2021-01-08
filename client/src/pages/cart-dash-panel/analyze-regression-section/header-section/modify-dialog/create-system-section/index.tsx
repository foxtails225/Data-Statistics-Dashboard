import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Slide,
  TextField
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { createSystem } from '../../../../../../API';

interface ISystemDialogProps {
  isOpen: boolean;
  onClose(): void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<Function>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const CreateSystemSection: React.FC<ISystemDialogProps> = (props) => {
  const [value, setValue] = useState<string>('');

  const handleClick = () => {
    createSystem({ system: value });
    props.onClose();
  };

  return (
    <Dialog
      open={props.isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => props.onClose()}
      aria-labelledby="input-system-slide-title"
      aria-describedby="input-system-slide-description"
    >
      <DialogContent>
        <TextField
          id="input-system"
          label="System"
          onChange={(e) => setValue(e.currentTarget.value)}
          required
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose()} color="primary">
          {`Cancel`}
        </Button>
        <Button onClick={handleClick} color="primary" disabled={value.length < 3}>
          {`Ok`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateSystemSection;
