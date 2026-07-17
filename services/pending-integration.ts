/**
 * Helper compartilhado pelos serviços em `services/*.service.ts`.
 *
 * Em vez de lançar um erro (o que derrubaria qualquer página que viesse a
 * chamar o serviço), cada método pendente de integração com o Supabase
 * registra um aviso apenas em desenvolvimento e retorna um resultado
 * vazio e tipado. Isso mantém a interface pública dos serviços "segura
 * por padrão": nenhuma página quebra caso passe a consumi-los antes da
 * conexão real com o banco estar pronta.
 */
export function warnPendingIntegration(methodName: string): void {
  if (process.env.NODE_ENV !== "production") {
    console.warn(
      `[services] ${methodName}: integração com o Supabase ainda não implementada. Retornando resultado vazio.`,
    );
  }
}
