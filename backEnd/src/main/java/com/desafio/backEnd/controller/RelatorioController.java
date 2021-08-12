package com.desafio.backEnd.controller;

import com.desafio.backEnd.controller.dto.NotaDto;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.List;

public class RelatorioController {

    public void geraRelatorio(List<NotaDto> notas) throws FileNotFoundException, JRException {
        File file = ResourceUtils.getFile("classpath:nota_report2.jrxml");
        JasperReport report = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(notas);
        JasperPrint print = JasperFillManager.fillReport(report, null, dataSource);

        JasperExportManager.exportReportToPdfFile(print, "C:\\eclipse-workspace\\sonner\\src\\main\\resources\\notas_report.pdf");

    }
}
