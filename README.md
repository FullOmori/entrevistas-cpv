# Condução de Entrevistas - CPV 🚀

Este repositório contém o componente React **EntrevistasCPV**, uma ferramenta interativa de alta performance desenvolvida para o time de **People & Performance da CPV**. A aplicação serve como um roteiro e guia estratégico em tempo real para a condução de entrevistas de contratação para múltiplos cargos.

## 🛠️ Tecnologias Utilizadas

- **React** (Hooks, dynamic styling, dynamic mounting)
- **Vanilla CSS** (com transições otimizadas para alto desempenho gráfico)
- **Google Fonts** (Plus Jakarta Sans)

## ✨ Diferenciais de Performance

O código foi otimizado para proporcionar uma navegação instantânea e livre de latência (jank-free):
1. **Carregamento Assíncrono de Fontes:** As fontes externas são pré-conectadas e injetadas no `<head>` de forma assíncrona, evitando que o navegador bloqueie a renderização principal ao navegar pelas abas.
2. **Reconciliação Virtual DOM Eficiente:** Uso correto de fragmentos de chave únicos (`Fragment key`) para evitar avisos no console e otimizar atualizações.
3. **Pintura e Layout Otimizados:** Substituição de transições genéricas (`transition: all`) por transições direcionadas nas propriedades de cor e sombras, eliminando oscilações de CPU.

---

## 📦 Como Usar o Componente

1. Copie o arquivo `EntrevistasCPV.jsx` para a pasta de componentes do seu projeto React (Vite, Next.js, etc.).
2. Importe o componente e declare-o em sua tela de administração ou avaliação:

```jsx
import EntrevistasCPV from "./components/EntrevistasCPV";

function App() {
  return (
    <div className="App">
      <EntrevistasCPV />
    </div>
  );
}

export default App;
```

---
*Desenvolvido para CPV · People & Performance*
