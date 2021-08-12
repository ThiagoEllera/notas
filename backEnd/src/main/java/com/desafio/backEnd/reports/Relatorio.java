package com.desafio.backEnd.reports;

import com.desafio.backEnd.controller.dto.NotaReportDto;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.view.JasperViewer;

import java.io.InputStream;
import java.util.List;

public class Relatorio {

    public void GeraRelatorio(List<NotaReportDto> notas) throws JRException {


        InputStream file = Relatorio.class.getResourceAsStream("src/main/resources/static/reports/nota_report.jrxml");
        JasperReport report = JasperCompileManager.compileReport(file);
        JasperPrint print = JasperFillManager.fillReport(report, null, new JRBeanCollectionDataSource(notas));
        JasperViewer.viewReport(print, false);

    }
}
