import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import { Accordion, AccordionSummary, AccordionDetails } from '../custom-accordion';
import CreateSystemSection from '../create-system-section';
import useStyles from '../../../../../../utils/styles';
import {
  getModifySystems,
  getModifyVersions,
  getModifyAttrVersions,
  createVersion
} from '../../../../../../API';

interface ISystemDetailsProps {
  expanded: string;
  system: number;
  onChange(param: string): void;
  onChangeSystem(param: number): void;
}

interface ISystem {
  SYSTEM_ID: number;
  SYSTEM_NAME: string;
}

interface IVersion {
  SYSTEM_VERSION: number;
}

interface IAttrVersion {
  SYSTEM_ATTRIBUTE_VERSION_ID: number;
}

const SystemDetailsSection: React.FC<ISystemDetailsProps> = (props) => {
  const [systems, setSystems] = useState<ISystem[]>([]);
  const [isSystemOpen, setIsSystemOpen] = useState<boolean>(false);
  const [version, setVersion] = useState<number>(-1);
  const [versions, setVersions] = useState<IVersion[]>([]);
  const [attrVersion, setAttrVersion] = useState<number>(-1);
  const [attrVersions, setAttrVersions] = useState<IAttrVersion[]>([]);
  const classes: Record<string, string> = useStyles();

  useEffect(() => {
    fetchSystem();
  }, []);

  useEffect(() => {
    const name = systems.find((item) => item.SYSTEM_ID === props.system)?.SYSTEM_NAME;

    if (props.system > 0 && name)
      getModifyVersions({ system_id: props.system, system_name: name })
        .then((res) => {
          setVersions(res.data);
          setVersion(res.data.length > 0 ? res.data[0].SYSTEM_VERSION : -1);
        })
        .catch(() => setVersions([]));
  }, [props.system, systems]);

  useEffect(() => {
    if (props.system > 0 && version > 0)
      getModifyAttrVersions({ system: props.system, version })
        .then((res) => {
          setAttrVersions(res.data);
          setAttrVersion(
            res.data.length > 0 ? res.data[0].SYSTEM_ATTRIBUTE_VERSION_ID : -1
          );
        })
        .catch(() => setAttrVersions([]));
  }, [props.system, version, versions, systems]);

  const fetchSystem = () => {
    getModifySystems()
      .then((res) => {
        setSystems(res.data);
        props.onChangeSystem(res.data.length > 0 ? res.data[0].SYSTEM_ID : -1);
      })
      .catch(() => setSystems([]));
  };

  const handleCreateVersion = () => {
    const name = systems.find((item) => item.SYSTEM_ID === props.system)?.SYSTEM_NAME;
    name && createVersion({ system_id: props.system, system_name: name });
    fetchSystem();
  };

  return (
    <>
      <Accordion
        square
        expanded={props.expanded === 'panel1'}
        onChange={() => props.onChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{'1. System Details'}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item md={8}>
              <Typography style={{ fontSize: '14px' }}>
                {'a. Select the applicable system or enter new to enter a new system'}
              </Typography>
            </Grid>
            <Grid item md={4}>
              <FormControl
                variant="outlined"
                size="small"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel>{`System`}</InputLabel>
                <Select
                  value={props.system}
                  label="System"
                  defaultValue=""
                  onChange={(e: any) => props.onChangeSystem(e.target.value as number)}
                >
                  <MenuItem value={-1} disabled>{`Choose System`}</MenuItem>
                  {systems.map((item: ISystem) => (
                    <MenuItem
                      value={item.SYSTEM_ID}
                      key={`${item.SYSTEM_NAME}-${item.SYSTEM_ID}`}
                    >
                      {item.SYSTEM_NAME}
                    </MenuItem>
                  ))}
                  <MenuItem value={-2} onClick={() => setIsSystemOpen(true)}>
                    {`New`}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={8}>
              <Typography style={{ fontSize: '14px' }}>
                {`b. Select the applicable system version or select new for a new \
              version to be automatically assigned.`}
              </Typography>
            </Grid>
            <Grid item md={4}>
              <FormControl
                variant="outlined"
                size="small"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel>{`Version`}</InputLabel>
                <Select
                  value={version}
                  label="Version"
                  defaultValue=""
                  onChange={(e) => setVersion(e.target.value as number)}
                >
                  <MenuItem value={-1} disabled>{`Choose Version`}</MenuItem>
                  {versions.map((item: IVersion) => (
                    <MenuItem
                      value={item.SYSTEM_VERSION}
                      key={`version-${props.system}-${item.SYSTEM_VERSION}`}
                    >
                      {item.SYSTEM_VERSION}
                    </MenuItem>
                  ))}
                  {systems.length > 0 && (
                    <MenuItem value={-2} onClick={handleCreateVersion}>
                      {`New`}
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={8}>
              <Typography style={{ fontSize: '14px' }}>
                {'c. Select the applicable CART attribute version.'}
              </Typography>
            </Grid>
            <Grid item md={4}>
              <FormControl
                variant="outlined"
                size="small"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel>{`Attribute Version`}</InputLabel>
                <Select
                  value={attrVersion}
                  label="Attribute Version"
                  defaultValue=""
                  onChange={(e) => setAttrVersion(e.target.value as number)}
                >
                  <MenuItem value={-1} disabled>{`Choose Attribute Version`}</MenuItem>
                  {attrVersions.map((item: IAttrVersion) => (
                    <MenuItem
                      value={item.SYSTEM_ATTRIBUTE_VERSION_ID}
                      key={`attr-version-${props.system}-${version}-${item.SYSTEM_ATTRIBUTE_VERSION_ID}`}
                    >
                      {item.SYSTEM_ATTRIBUTE_VERSION_ID}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {isSystemOpen && (
        <CreateSystemSection
          isOpen={isSystemOpen}
          onClose={() => setIsSystemOpen(false)}
        />
      )}
    </>
  );
};

export default SystemDetailsSection;
