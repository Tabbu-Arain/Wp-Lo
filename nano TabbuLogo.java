import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class TabbuLogo extends JPanel {
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.BLUE);
        g.setFont(g.getFont().deriveFont(50f));
        g.drawString("TABBU", 50, 100);
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("TABBU Logo");
        TabbuLogo logo = new TabbuLogo();
        frame.add(logo);
        frame.setSize(300, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
