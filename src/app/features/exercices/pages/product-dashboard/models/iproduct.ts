export interface Iproduct {
    nom: string;
	photo: string; // URL
	prix: number;
	prixPromo: boolean;
	nouveauPrix?: number; // Optionnel, si le produit est en promotion
	qttRestante: number;
}
