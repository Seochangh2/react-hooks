import defaultAxios from "axios";
import { useEffect, useState } from "react";
const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    erorr: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(options)
      .then((response) => {
        setState({
          ...state,
          loading: false,
          response,
        });
      })
      .catch((e) => {
        setState({ ...state, loading: false, e });
      });
  }, [trigger]);
  if (!options.url) return;

  return { ...state, refetch };
};
export default useAxios;
