import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://svatkyapi.cz/api";

export interface INameDay {
  name: string;
}

export interface IDateInfo {
  date: string; // e.g., "2025-04-16"
  dayNumber: string; // e.g., "1"
  dayInWeek: string; // e.g., "pondělí"
  monthNumber: string; // e.g., "10"
  month: {
    nominative: string; // e.g., "leden"
    genitive: string; // e.g., "ledna"
  };
  year: string; // e.g., "2022"
  name: string; // e.g., "Igor"
  isHoliday: boolean;
  holidayName: string | null;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers) {
      // headers.set("x-api-key", MESSAGE_API_KEY);
      headers.set("Content-Type", "application/json");
      return headers;
    },
    // Custom response handler to avoid JSON parsing errors
    async responseHandler(response) {
      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      } else {
        return response.text();
      }
    },
  }),
  endpoints: (builder) => {
    return {
      fetchDay: builder.query<IDateInfo, void>({
        query() {
          return {
            url: "/day",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchDayQuery } = apiSlice;
