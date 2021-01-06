import React, { useState, useEffect } from 'react';
import {
  Grid,
  Container,
  CssBaseline,
  Card,
  CardHeader,
  Typography
} from '@material-ui/core';
import { getCartItems } from '../../API';
import useStyles from '../../utils/styles';
import { INIT_PARAMS } from '../../constants';
import AnalyzeRegressionSection from './analyze-regression-section';

const CartDashPanel: React.FC = () => {
  const [source, setSource] = useState({});
  const [dataSource, setDataSource] = useState({} as any);
  const [system, setSystem] = useState<number>(4);
  const [version, setVersion] = useState<number>(1);
  const [inclination, setInclination] = useState<string>('');
  const [incs, setIncs] = useState<Array<any>>([]);
  const [dataType, setDataType] = useState<string>('coverage');
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [terrestrial, setTerrestrial] = useState({});
  const [maxAltitude, setMaxAltitude] = useState(0);
  const [coefficients, setCoefficients] = useState({} as any);
  const [text, setText] = useState<string>('');
  const deepDive = 'system1/coverage';
  const metric = deepDive.split('/')[1];
  const missionType = 'orbital';
  const classes = useStyles();

  useEffect(() => {
    setText('');
    getCartItems({
      type: missionType,
      system: system,
      version: version,
      dataType
    })
      .then((res: any) => {
        setTerrestrial(res.data.terrestrial);
        setSource(res.data.data);
        setDataSource(res.data.data);
        setMaxAltitude(res.data.maxAltitude);
        setCoefficients(res.data.coefficients);
        setText(res.data.text);

        if (Object.keys(res.data.data).includes('plot_value')) {
          let tmp = res.data.data.plot_value.map((item: any) => item['inclination']);
          let uniqueArray: Array<any> = [...new Set(tmp)];
          setIncs(uniqueArray.sort());
        }

        // TODO: this is for "cart system".
        // setText(
        //   props.equationsTex[system.replace(" ", "_").toLowerCase()][metric](
        //     data["coefficients"][metric]
        //   )
        // );
      })
      .then(() => {
        setIsLoading(false);
      });
    setIsRefresh(false);
  }, [system, version, dataType, isRefresh]);

  useEffect(() => {
    if (Object.keys(dataSource).includes('plot_value')) {
      let user_inclination: number | string = inclination !== '' ? inclination : 30;
      let data = dataSource.plot_value.filter(
        (item: any) => item.inclination === user_inclination
      );
      setSource((prevState: any) => ({ ...prevState, plot_value: data }));
    }
  }, [inclination]);

  const equation = (inc: any, alt: any, metric: string) => {
    // TODO: this is for "cart system".
    // const altitude = parseFloat(alt);
    // const inclination = parseFloat(inc);
    // const coefs = coefficients[metric];
    // const eqn = props.equations[system.replace(" ", "_").toLowerCase()][metric];
    // return eqn(coefs, altitude, inclination);
    return inc;
  };
  console.log(source);
  return (
    <Grid container>
      <Container component="main" maxWidth="xl">
        <Card className={classes.cartCard}>
          <CssBaseline />
          <CardHeader
            title={
              <Typography component="h1" variant="h5" style={{ margin: 5 }}>
                {`CAESAR Data Dashboard`}
              </Typography>
            }
          />
          {!isLoading &&
            (missionType === 'orbital' ? (
              <AnalyzeRegressionSection
                equation={(x: any, y: any, m: any) => equation(x, y, m)}
                maxAltitude={maxAltitude}
                alt={INIT_PARAMS.altitude}
                inc={INIT_PARAMS.inclination}
                value={INIT_PARAMS.value}
                data={source}
                source={dataSource}
                dataType={dataType}
                selectedItem={metric}
                text={text}
                system={system}
                version={version}
                inclination={inclination}
                incs={incs}
                isRefresh={isRefresh}
                onRefresh={() => setIsRefresh(true)}
                onInc={(value: any) => setInclination(value)}
                onSystem={(value: any) => setSystem(value)}
                onVersion={(value: any) => setVersion(value)}
                onDataType={(value: any) => setDataType(value)}
              />
            ) : (
              <></>
            ))}
        </Card>
      </Container>
    </Grid>
  );
};

export default CartDashPanel;
