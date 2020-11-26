import { render, screen } from '@testing-library/react';
import Product from './product';

test('renders product title, price & description', () => {
    let product = {
        Name: "Notebook Basic 15",
        Price: 956,
        Description: "Notebook Basic 15 with 2,80 GHz quad core, 15 LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro"
    }
    render(<Product product={product} />);
    const titleElement = screen.getByText('Notebook Basic 15');
    const priceElement = screen.getByText(/956/i);
    const descElement = screen.getByText(/Notebook Basic 15 with 2,80 GHz quad core, 15 LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro/i);
    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
});
