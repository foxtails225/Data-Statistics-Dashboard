import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';
import { Accordion, AccordionSummary, AccordionDetails } from '../custom-accordion';
import useStyles from '../../../../../../utils/styles';
import { getModifyModels, createModel } from '../../../../../../API';

interface IModelDetailsProps {
  expanded: string;
  system: number;
  onChange(parameter: string): void;
}

interface IModel {
  MODEL_ID: number;
  BEAM_TYPE_STK: string;
}

const ModelDetailsSection: React.FC<IModelDetailsProps> = (props) => {
  const [model, setModel] = useState<number>(-1);
  const [models, setModels] = useState<IModel[]>([]);
  const [isNew, setIsNew] = useState<boolean>(false);
  const classes: Record<string, string> = useStyles();

  useEffect(() => {
    fetchModels();
  }, [props.system]);

  const fetchModels = () => {
    getModifyModels({ system: props.system })
      .then((res) => {
        setModels(res.data);
        setModel(res.data.length > 0 ? res.data[0].MODEL_ID : -1);
      })
      .catch(() => setModels([]));
  };

  const handleCreateModel = () => {
    const beam = models.find((item) => item.MODEL_ID === model)?.BEAM_TYPE_STK;
    beam && createModel({ system_id: props.system, beam });
    fetchModels();
    setIsNew(true);
  };

  return (
    <Accordion
      square
      expanded={props.expanded === 'panel2'}
      onChange={() => props.onChange('panel2')}
    >
      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography>{'2. Model Details'}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item md={8}>
            <Typography style={{ fontSize: '14px' }}>
              {`a. Select the applicable model ID or select new for a new  version to \
              be automatically assigned.`}
            </Typography>
          </Grid>
          <Grid item md={4}>
            <FormControl
              variant="outlined"
              size="small"
              className={classes.formControl}
              fullWidth
            >
              <InputLabel>{`Model`}</InputLabel>
              <Select
                value={model}
                label="Model"
                defaultValue=""
                onChange={(e) => setModel(e.target.value as number)}
              >
                <MenuItem value={-1} disabled>{`Choose Model`}</MenuItem>
                {models.map((item: IModel) => (
                  <MenuItem value={item.MODEL_ID} key={`${item.MODEL_ID}`}>
                    {item.MODEL_ID}
                  </MenuItem>
                ))}
                <MenuItem value={-2} onClick={handleCreateModel}>
                  {`New`}
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={8}>
            <Typography style={{ fontSize: '14px' }}>
              {`b. Download new model for uploading to Bit Bucket.`}
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Button name="load_model" size="small" variant="outlined" disabled={!isNew}>
              {'Load Model'}
            </Button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default ModelDetailsSection;
