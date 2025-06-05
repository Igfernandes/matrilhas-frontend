import { useEffect, useState } from "react";

export function useMercadoPago() {
  const [mpProductKey, setMpProductKey] = useState<string>();

  useEffect(() => {
    if (!window.MercadoPago || !mpProductKey) return;

    const mp = new window.MercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PK);
    mp.checkout({
      preference: {
        id: mpProductKey,
      },
      autoOpen: true, // 👉 Esta opção força abrir o modal assim que carregar
      render: {
        container: "#wallet_container",
        label: "Pagar com Mercado Pago", // Ainda pode exibir o botão, mas o modal abre sozinho
      },
    });
  }, [mpProductKey]);

  return {
    handleUpdateMpProductKey: setMpProductKey,
  };
}
