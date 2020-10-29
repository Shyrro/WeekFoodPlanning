import { onMounted, Ref, ref } from "vue";
import axios, { AxiosError, AxiosResponse } from "axios";

export function useFetch<T>(dbTable: string): Ref<Array<T>> {
  const apiString = `http://localhost:3000/api/${dbTable}`;
  const fetchedObject: Ref<Array<T>> = ref([]);  

  onMounted(() => {
    axios
      .get<Array<T>>(apiString)
      .then((dbObject: AxiosResponse<Array<T>>) => {
        fetchedObject.value = dbObject.data;        
      })
      .catch((error: AxiosError) => {
        console.log(error.message);
      });
  });

  return fetchedObject;
}

export function useUpsert<T> (dbTable: string) {
  
  const putData = async function(dbObject: T) {
    const apiString = `http://localhost:3000/api/${dbTable}`;
    try {
      await axios.put(apiString, dbObject);
    } catch(error) {
      console.log(error.message);
    }    
  }
  
  return putData;
}
