import React from "react";
import { RouterLayout } from "./common/RouterLayout";
import { ComponentReloj } from "./home/1_Componentes";
import { EstadosCiclosVida } from "./home/2_Estados_Ciclos_de_Vida";
import { ManejoDeEventosComponent } from "./home/3_Manejo_de_Eventos";
import { ListasKeys } from "./home/4_ListasKeys";
import { ComponentControlled } from "./home/5_Componentes_controlados";
import { UseEffectComponent } from "./home/6_useEffect";
import { EnrutamientoComponent } from "./home/7_Enrutamiento";
import { ContextApiComponent } from "./home/8_ContextApi";
import { HOCComponent } from "./home/9_HOC";
import { TestingReactComponent } from "./home/10_TestingReact";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./landing/Landing";


export const AppRouter= () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/pregunta01" element={<ComponentReloj />} />
        <Route path="/pregunta02" element={<EstadosCiclosVida />} />
        <Route path="/pregunta03" element={<ManejoDeEventosComponent />} />
        <Route path="/pregunta04" element={<ListasKeys />} />
        <Route path="/pregunta05" element={<ComponentControlled />} />
        <Route path="/pregunta06" element={<UseEffectComponent />} />
        <Route path="/pregunta07" element={<EnrutamientoComponent />} />
        <Route path="/pregunta08" element={<ContextApiComponent />} />
        <Route path="/pregunta09" element={<HOCComponent />} />
        <Route path="/pregunta10" element={<TestingReactComponent />} />
      </Route>     
    </Routes>
  );
};