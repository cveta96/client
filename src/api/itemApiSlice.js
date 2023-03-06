import { apiSlice } from './apiSlice';
/*
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Items'],
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => '/item',
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ['Items'],
    }),
    newItem: builder.mutation({
      query: (item) => ({
        url: '/item',
        method: 'POST',
        body: item,
      }),
      invalidatesTags: ['Items'],
    }),
    
    updateItem: builder.mutation({
      query: (item) => ({
        url: `/item/${item.id}`,
        method: 'PATCH',
        body: todo,
      }),
      invalidatesTags: ['Items'],
    }),
    
    deleteItem: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Items'],
    }),
  }),
});
*/
export const newItemApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    newItem: builder.mutation({
      query: (item) => ({
        url: '/item',
        method: 'POST',
        body: item,
      }),
      invalidatesTags: ['Items'],
    }),
  }),
});

export const { useNewItemMutation } = newItemApiSlice;

/*
export const {
  useGetItemsQuery,
  useNewItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = apiSlice;
*/
