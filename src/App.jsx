import "./styles.css";
import useQueryStrings from "./hooks/useQueryStrings";

export default function App() {
  const [params, setParams] = useQueryStrings();

  setParams({
    nome: "João Silva",
    email: "joao@gmail.com",
    cpf: "11111111112",
    date: "2021-09-02"
  });

  console.log(params);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
