import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const newconnector_get_s_1344bae8_podcast_rss_list = createAsyncThunk(
  "newconnector_response_get_Newdatacalls/newconnector_get_s_1344bae8_podcast_rss_list",
  async payload => {
    const response = await apiService.newconnector_get_s_1344bae8_podcast_rss_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const newconnector_response_get_NewdatacallsSlice = createSlice({
  name: "newconnector_response_get_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [newconnector_get_s_1344bae8_podcast_rss_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [newconnector_get_s_1344bae8_podcast_rss_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [newconnector_get_s_1344bae8_podcast_rss_list.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  newconnector_get_s_1344bae8_podcast_rss_list,
  slice: newconnector_response_get_NewdatacallsSlice
}
