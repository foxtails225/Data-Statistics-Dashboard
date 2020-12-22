import React, { useState } from "react";
import { Grid, Card, CardContent } from "@material-ui/core";

import DashAddon from "../../../../components/Button/DashAddon";
import SelectedChartSection from "./selected-chart-section";
import * as Constants from "../../../../constants";
import { useWindowSize } from "../../../../utils/util";

function ChartsLibsSection(props: any) {
  const [selected, setSelected] = useState([1, 2, 3] as any);
  const [anchorEl, setAnchorEl] = useState(null as any);
  const [index, setIndex] = useState(0);
  const size = useWindowSize();

  const handleSelected = (id: any) => {
    setSelected(
      selected.map((item: any, idx: any) => {
        if (idx === Number(index)) item = id;
        return item;
      })
    );
    setAnchorEl(null);
  };
  
  return (
    <>
      {selected.map((item: any, idx: number) => {
        let dset = Constants.MENU_ITEMS[props.dataSet][item].dataset;
        return (
          <Grid
            item
            md={6}
            key={item}
            style={{
              paddingLeft: "2rem",
              paddingRight: idx % 2 === 0 ? "2rem" : "0.8rem",
            }}
          >
            <Card style={{ height: `calc(${props.size.height} * 0.4)` }}>
              <CardContent>
                <DashAddon
                  type={1}
                  selected={selected}
                  anchorEl={anchorEl}
                  index={idx}
                  onIndex={(value: any) => setIndex(value)}
                  onAnchorEl={(value: any) => setAnchorEl(value)}
                  onSelected={(value: any) => handleSelected(value)}
                />
                <Grid item md={12}>
                  {props.traces[dset] &&
                    Object.keys(props.traces[dset]).length > 0 && (
                      <SelectedChartSection
                        id={item}
                        size={props.size}
                        data={props.traces[dset]}
                        dataType={props.dataType}
                      />
                    )}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
      {selected.length % 2 === 0 && <Grid item md={6} />}
    </>
  );
}

export default ChartsLibsSection;
