import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

export function RouteProgress(): JSX.Element {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loading = navigation.state === "loading";
    setIsLoading(loading);
  }, [navigation.state]);

  return (
    <div
      className="route-progress"
      data-state={isLoading ? "loading" : "idle"}
    />
  );
}
