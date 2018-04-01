package by.scherbovich;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by Newermind on 01.04.2018.
 */
public class CalculatorTest {

    private Calculator calculator = new Calculator();

    @Test
    public void add() throws Exception {
        assertEquals(50, calculator.add(20, 30), 0);
    }

    @Test
    public void subtract() throws Exception {
        assertEquals(45, calculator.subtract(100, 55), 0);
    }

    @Test
    public void multiply() throws Exception {
        assertEquals(125, calculator.multiply(25, 5), 0);
    }

    @Test
    public void divide() throws Exception {
        assertEquals(2.5, calculator.divide(5, 2), 0);
    }

    // При делении на 0 возвращает -1

    @Test
    public void calculate() throws Exception {
        assertEquals(0, calculator.calculate(20, 0, "/"), 0);
    }

}