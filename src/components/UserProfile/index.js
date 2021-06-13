import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { useTheme } from "./theme";
import { DataProvider } from "./DataProvider";

import Driver from "./Driver";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./peopleSlice";
import { Provider } from "react-redux";

export default function UserProfile() {
  const store = configureStore({
    reducer: {
      people: peopleReducer,
    },
  });
  const [currentTheme, setCurrentTheme] = useTheme();
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={currentTheme}>
          <Provider store={store}>
            <DataProvider>
                <div>
                <Driver />
                </div>
            </DataProvider>
          </Provider>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </>
  );
}
